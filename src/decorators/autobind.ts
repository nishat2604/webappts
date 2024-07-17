export function  autobind(_:any,_2:string, descriptor:PropertyDescriptor){

    const originalmethod=descriptor.value;
    const adjDescriptor:PropertyDescriptor={
        configurable:true,
get(){
    const bounfn=originalmethod.bind(this)
    return bounfn;
}
    
};
return adjDescriptor;
}