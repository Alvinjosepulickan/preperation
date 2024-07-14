interface Repository<T> {
    create(item: T): void;
    read(id: number): T | undefined;
    update(id: number, item: T): void;
    delete(id: number): void;
}


class MemoryRepository<T> implements Repository<T> {
    private data: Map<number, T>;

    constructor() {
        this.data = new Map<number, T>();
    }

    create(item: T): void {
        // For simplicity, assume each item has a unique numeric ID
        // In a real scenario, you would generate or manage IDs differently
        // Here, we are using the length of the map as an ID
        const id = this.data.size + 1;
        this.data.set(id, item);
        console.log(`Item with ID ${id} created.`);
    }

    read(id: number): T | undefined {
        return this.data.get(id);
    }

    update(id: number, item: T): void {
        if (this.data.has(id)) {
            this.data.set(id, item);
            console.log(`Item with ID ${id} updated.`);
        } else {
            console.log(`Item with ID ${id} not found.`);
        }
    }

    delete(id: number): void {
        if (this.data.has(id)) {
            this.data.delete(id);
            console.log(`Item with ID ${id} deleted.`);
        } else {
            console.log(`Item with ID ${id} not found.`);
        }
    }
}








// Example with numbers
let numberRepository = new MemoryRepository<number>();
numberRepository.create(1);
numberRepository.create(2);
console.log(numberRepository.read(1)); // Output: 1
numberRepository.update(2, 3);
numberRepository.delete(1);

// Example with strings
let stringRepository = new MemoryRepository<string>();
stringRepository.create("Apple");
stringRepository.create("Banana");
console.log(stringRepository.read(1)); // Output: "Apple"
stringRepository.update(2, "Cherry");
stringRepository.delete(1);
