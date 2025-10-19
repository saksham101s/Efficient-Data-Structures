import { Trie } from './trie';

describe('Trie', () => {
    let trie: Trie;

    beforeEach(() => {
        trie = new Trie();
        trie.insert('apple');
        trie.insert('app');
        trie.insert('apricot');
        trie.insert('banana');
    });

    describe('insert and search', () => {
        test('should find a word that was inserted', () => {
            expect(trie.search('apple')).toBe(true);
        });

        test('should find a shorter word that is a prefix of another', () => {
            expect(trie.search('app')).toBe(true);
        });
        
        test('should not find a word that was not inserted', () => {
            expect(trie.search('apples')).toBe(false);
        });
        
        test('should not find a prefix that is not a full word', () => {
            expect(trie.search('apri')).toBe(false);
        });
        
        test('should handle searching for an empty string', () => {
            expect(trie.search('')).toBe(false); // Root is not end of word unless explicitly inserted
            trie.insert('');
            expect(trie.search('')).toBe(true);
        });
    });

    describe('startsWith', () => {
        test('should return true for a prefix of an inserted word', () => {
            expect(trie.startsWith('ap')).toBe(true);
        });
        
        test('should return true for a prefix that is also a full word', () => {
            expect(trie.startsWith('app')).toBe(true);
        });
        
        test('should return true for the full word itself', () => {
            expect(trie.startsWith('apple')).toBe(true);
        });
        
        test('should return false for a prefix that does not exist', () => {
            expect(trie.startsWith('orange')).toBe(false);
        });
        
        test('should return false for a prefix that does not match', () => {
            expect(trie.startsWith('bap')).toBe(false);
        });
    });
});
