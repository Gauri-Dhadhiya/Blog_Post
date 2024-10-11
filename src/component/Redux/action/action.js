export const readSingleBlog = (id) =>{
    return{
        type: 'Read_Blog',
        id
    }
}
export const createSingleBlog = (data) =>{
    return{
        type: 'Create_Blog',
        data,
    }
}
export const updateSingleBlog = (data) =>{
    return{
        type: 'Update_Blog',
        data
    }
}
export const deleteSingleBlog = (id) =>{
    return{
        type: 'Delete_Blog',
        id
    }
}
