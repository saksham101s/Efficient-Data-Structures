import { Graph } from './graph';

describe('Graph', () => {
    let graph: Graph<string>;

    beforeEach(() => {
        graph = new Graph<string>();
    });

    test('should add vertices correctly', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        expect(graph.toString()).toContain('A ->');
        expect(graph.toString()).toContain('B ->');
    });

    test('should not add duplicate vertices', () => {
        expect(graph.addVertex('A')).toBe(true);
        expect(graph.addVertex('A')).toBe(false);
    });

    test('should add edges between existing vertices', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        expect(graph.toString()).toContain('A -> B');
        expect(graph.toString()).toContain('B -> A');
    });

    test('should not add edges if a vertex does not exist', () => {
        graph.addVertex('A');
        expect(graph.addEdge('A', 'C')).toBe(false);
    });

    test('should remove edges correctly', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        
        graph.removeEdge('A', 'B');
        expect(graph.toString()).not.toContain('B -> A');
        expect(graph.toString()).toContain('A -> C');
    });

    test('should remove a vertex and all its edges', () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');

        graph.removeVertex('A');
        
        expect(graph.toString()).not.toContain('A ->');
        expect(graph.toString()).not.toContain('B -> A');
        expect(graph.toString()).not.toContain('C -> A');
    });

    // Setup for traversal tests
    describe('Traversal Algorithms', () => {
        beforeEach(() => {
            // Create a consistent graph structure for traversal tests
            //      A
            //     / \
            //    B   C
            //   /     \
            //  D       E
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');
            graph.addVertex('D');
            graph.addVertex('E');
            graph.addEdge('A', 'B');
            graph.addEdge('A', 'C');
            graph.addEdge('B', 'D');
            graph.addEdge('C', 'E');
        });

        describe('Breadth-First Search (BFS)', () => {
            test('should perform BFS correctly from a given start node', () => {
                const result = graph.bfs('A');
                // The order of neighbors at the same level can vary (B then C, or C then B)
                // But the levels themselves must be correct.
                expect(result[0]).toBe('A');
                expect(['B', 'C']).toContain(result[1]);
                expect(['B', 'C']).toContain(result[2]);
                expect(['D', 'E']).toContain(result[3]);
                expect(['D', 'E']).toContain(result[4]);
                expect(result.length).toBe(5);
            });

            test('should return an empty array if the start vertex does not exist', () => {
                const result = graph.bfs('Z');
                expect(result).toEqual([]);
            });

            test('should handle graphs with cycles', () => {
                graph.addEdge('B', 'C'); // Creates a cycle A -> B -> C -> A
                const result = graph.bfs('A');
                expect(result).toHaveLength(5); // Should still visit every node exactly once
                expect(new Set(result).size).toBe(5);
            });
        });

        describe('Depth-First Search (DFS)', () => {
            test('should perform DFS correctly from a given start node', () => {
                const result = graph.dfs('A');
                // A possible valid DFS order is A, B, D, C, E
                expect(result).toEqual(['A', 'B', 'D', 'C', 'E']);
            });

            test('should return an empty array if the start vertex does not exist', () => {
                const result = graph.dfs('Z');
                expect(result).toEqual([]);
            });

            test('should handle graphs with cycles', () => {
                graph.addEdge('B', 'C'); // Creates a cycle
                const result = graph.dfs('A');
                expect(result).toHaveLength(5); // Should still visit every node exactly once
                expect(new Set(result).size).toBe(5);
            });
        });
    });
});

