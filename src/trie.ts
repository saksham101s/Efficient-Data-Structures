/**
 * Represents a single node in the Trie.
 * Each node has children (a map of characters to other TrieNodes)
 * and a flag to indicate if it's the end of a complete word.
 */
class TrieNode {
    public children: Map<string, TrieNode> = new Map();
    public isEndOfWord: boolean = false;
}

/**
 * Implements a Trie (Prefix Tree) for efficient string storage and retrieval.
 * Ideal for applications like autocomplete and spell checking.
 */
export class Trie {
    private root: TrieNode = new TrieNode();

    /**
     * Inserts a word into the Trie.
     * @param word The word to insert.
     */
    public insert(word: string): void {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEndOfWord = true;
    }

    /**
     * Searches for a complete word in the Trie.
     * @param word The word to search for.
     * @returns True if the exact word exists, false otherwise.
     */
    public search(word: string): boolean {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)!;
        }
        return currentNode.isEndOfWord;
    }

    /**
     * Checks if there is any word in the Trie that starts with the given prefix.
     * @param prefix The prefix to search for.
     * @returns True if the prefix exists, false otherwise.
     */
    public startsWith(prefix: string): boolean {
        let currentNode = this.root;
        for (const char of prefix) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)!;
        }
        return true;
    }
}
