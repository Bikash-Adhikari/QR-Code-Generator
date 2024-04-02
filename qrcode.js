const qrinput = document.querySelector("#qr-input");
const qrbutton = document.querySelector("#qr-button");
const qrimg = document.querySelector("#qr-img");


qrbutton.addEventListener("click", ()=>{
    const inputvalue = qrinput.value;
    
    if(!inputvalue) {
        alert("Please enter url");
    }else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        qrimg.alt = `QR code for ${inputvalue}`;

    }; 
    
});


