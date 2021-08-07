function newCallBack (nama1, nama2, pulangKampung){
    console.log(nama1,nama2);
    pulangKampung()
}
function myCall (){
    console.log(`Pulang Kampung`);
}
newCallBack('Adi', 'yusuf', myCall)