class Popup{
    constructor(page){
        this.page=page;
    }

    async handle(){
        this.page.once('dialog',async(dialog) =>await dialog.accept())
    }
}

module.exports={Popup}
