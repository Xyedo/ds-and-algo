class TrieNode {
  public childrens: (TrieNode | null)[];
  public isWordEnd: boolean;

  constructor() {
    this.childrens = new Array<TrieNode | null>(128).fill(null);
    this.isWordEnd = false;
  }
}

class Trie {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(...values: string[]): number {
    for (const v of values) {
      let current = this.root;
      for (let i = 0; i < v.length; i++) {
        const index = v.charCodeAt(i);
        if (!current.childrens[index]) {
          current.childrens[index] = new TrieNode();
        }
        current = current.childrens[index]!;
      }
      current.isWordEnd = true;
    }
    return values.length;
  }

  search(v: string, exact: boolean = false): boolean {
    let current: TrieNode = this.root;
    for (let i = 0; i < v.length; i++) {
      const index = v.charCodeAt(i);
      if (current.childrens[index] == null) {
        return false;
      }
      current = current.childrens[index]!!;
    }
    return !exact || current.isWordEnd;
  }

  suggest(prefix: string): string[] {
    let current: TrieNode = this.root;
    const list: string[] = [];
    for (let i = 0; i < prefix.length; i++) {
      const index = prefix.charCodeAt(i);
      if (current.childrens[index] === null) {
        return list;
      }
      current = current.childrens[index]!!;
    }
    this.suggestNode(current, list, prefix);
    return list;
  }
  traverse(): void {
    this._traverse();
  }
  private _traverse(node: TrieNode | null = this.root, prefix: string[] = []) {
    if (node === null) {
      return;
    }
    if (node.isWordEnd) {
      console.log(prefix);
    }
    for (let i = 0; i < node.childrens.length; i++) {
      const index = i;
      const child = node.childrens[i];
      if (child) {
        prefix.push(String.fromCharCode(index));
        this._traverse(child, prefix);
        prefix.pop();
      }
    }
  }
  private suggestNode(
    node: TrieNode | null,
    list: string[],
    prefix: string
  ): void {
    if (node === null) {
      return;
    }
    if (node.isWordEnd) {
      list.push(prefix);
    }
    for (let i = 0; i < node.childrens.length; i++) {
      const char = String.fromCharCode(i);
      const child = node.childrens[i];

      this.suggestNode(child, list, prefix + char);
    }
  }
}

const mytrie = new Trie();
// mytrie.insert(
//   "sam",
//   "john",
//   "tim",
//   "jose",
//   "rose",
//   "cat",
//   "dog",
//   "dogg",
//   "roses"
// );

// const wordToFind = [
//   "sam",
//   "john",
//   "tim",
//   "jose",
//   "rose",
//   "cat",
//   "dog",
//   "dogg",
//   "roses",
//   "rosess",
//   "ans",
//   "san",
// ];

// for (const word of wordToFind) {
//   if (mytrie.search(word, true)) {
//     console.log("ketemu ", word);
//   } else {
//     console.log(word, "tidak ketemu");
//   }
// }

mytrie.insert(
  "amazon",
  "amazon prime",
  "amazing",
  "amazing spiderman",
  "amazed",
  "apple"
);
console.log(mytrie.suggest("amaz"));
