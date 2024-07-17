export function autobind(_, _2, descriptor) {
    const originalmethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const bounfn = originalmethod.bind(this);
            return bounfn;
        }
    };
    return adjDescriptor;
}
//# sourceMappingURL=autobind.js.map