if (String.prototype.parseMSNetMVCJsonDate != undefined){
    String.prototype.parseMSNetMVCJsonDate = function() { return new Date(Number(this.match(/\d+/))); }
}