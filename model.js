const mongoose =require('mongoose');
const FolderSchema =mongoose.Schema({
    folder:{
        type:String,
        required:true
    }
});
const Folder = module.exports = mongoose.model('Folder',FolderSchema)