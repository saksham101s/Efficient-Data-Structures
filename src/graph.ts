import { Queue } from './queue';

/**
 * Represents a Graph data structure using an Adjacency List.
 * This implementation is for an undirected graph.
 */
export class Graph<T> {
    private adjacencyList: Map<T, T[]>;

    constructor() {
        this.adjacencyList = new Map<T, T[]>();
    }

    /**
     * Adds a new vertex (node) to the graph.
     * @param vertex The vertex to add.
     * @returns True if the vertex was added, false if it already existed.
     */
    public addVertex(vertex: T): boolean {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
            return true;
        }
        return false;
    }

    /**
     * Adds an edge (connection) between two vertices.
     * Since this is an undirected graph, the connection is bidirectional.
     * @param vertex1 The first vertex.
     * @param vertex2 The second vertex.
     * @returns True if the edge was added successfully, false otherwise.
     */
    public addEdge(vertex1: T, vertex2: T): boolean {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1)?.push(vertex2);
            this.adjacencyList.get(vertex2)?.push(vertex1);
            return true;
        }
        return false;
    }

    /**
     * Removes an edge between two vertices.
     * @param vertex1 The first vertex.
     * @param vertex2 The second vertex.
     * @returns True if the edge was removed, false if it didn't exist.
     */
    public removeEdge(vertex1: T, vertex2: T): boolean {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            const v1Neighbors = this.adjacencyList.get(vertex1);
            if(v1Neighbors) {
                this.adjacencyList.set(vertex1, v1Neighbors.filter(v => v !== vertex2));
            }
            
            const v2Neighbors = this.adjacencyList.get(vertex2);
            if(v2Neighbors) {
                this.adjacencyList.set(vertex2, v2Neighbors.filter(v => v !== vertex1));
            }
            return true;
        }
        return false;
    }

    /**
     * Removes a vertex and all of its associated edges from the graph.
     * @param vertex The vertex to remove.
     * @returns True if the vertex was found and removed, otherwise false.
     */
    public removeVertex(vertex: T): boolean {
        if (!this.adjacencyList.has(vertex)) {
            return false;
        }

        const neighbors = this.adjacencyList.get(vertex) as T[];

        for (const neighbor of neighbors) {
            this.removeEdge(vertex, neighbor);
        }

        this.adjacencyList.delete(vertex);
        return true;
    }

    /**
     * Performs a Breadth-First Search traversal starting from a given vertex.
     * @param startVertex The vertex to begin the traversal from.
     * @returns An array of vertices in the order they were visited.
     */
    public bfs(startVertex: T): T[] {
        if (!this.adjacencyList.has(startVertex)) {
            return [];
        }

        const queue = new Queue<T>();
        const visited = new Set<T>();
        const result: T[] = [];

        queue.enqueue(startVertex);
        visited.add(startVertex);

        while (!queue.isEmpty()) {
            const currentVertex = queue.dequeue() as T;
            result.push(currentVertex);

            const neighbors = this.adjacencyList.get(currentVertex) as T[];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.enqueue(neighbor);
                }
            }
        }
        return result;
    }

    /**
     * Performs a Depth-First Search traversal starting from a given vertex.
     * @param startVertex The vertex to begin the traversal from.
     * @returns An array of vertices in the order they were visited.
     */
    public dfs(startVertex: T): T[] {
        if (!this.adjacencyList.has(startVertex)) {
            return [];
        }

        const visited = new Set<T>();
        const result: T[] = [];

        this.dfsRecursive(startVertex, visited, result);

        return result;
    }

    /**
     * Helper method to perform the recursive DFS traversal.
     * @param vertex The current vertex being visited.
     * @param visited A set of all visited vertices.
     * @param result The array to store the order of visited vertices.
     */
    private dfsRecursive(vertex: T, visited: Set<T>, result: T[]): void {
        visited.add(vertex);
        result.push(vertex);

        const neighbors = this.adjacencyList.get(vertex) as T[];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this.dfsRecursive(neighbor, visited, result);
            }
        }
    }

    /**
     * Returns a string representation of the adjacency list.
     * @returns A formatted string of the graph.
     */
    public toString(): string {
        let result = '';
        for (const [vertex, neighbors] of this.adjacencyList.entries()) {
            result += `${vertex} -> ${neighbors.join(', ')}\n`;
        }
        return result;
    }
}

