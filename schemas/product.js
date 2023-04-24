export default{
    name:'product',
    title:'Producto',
    type:'document',
    fields:[
        {
            name:'image',
            title:'Imagen',
            type:'array',
            of:[{type:'image'}],
            options:{
                hotspot:true
            }
        },
        {
            name:'name',
            title:'Nombre',
            type:'string'
        },
        {
            name:'slug',
            title:'Ruta',
            type:'slug',
            options:{
                source:'name',
                maxLength:90
            }
        },
        {
            name:'price',
            title:'Precio',
            type:'number'
        },
        {
            name:'details',
            title:'Descripcion',
            type:'string'
        }
    ]
}