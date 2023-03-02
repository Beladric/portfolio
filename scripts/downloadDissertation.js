function downloadFile(url, fileName){
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
        .then(res => res.blob())
        .then(res => {
            const aElement = document.createElement('a');
            aElement.setAttribute('download', fileName);
            const href = URL.createObjectURL(res);
            aElement.href = href;
            // aElement.setAttribute('href', href);
            aElement.setAttribute('target', '_blank');
            aElement.click();
            URL.revokeObjectURL(href);
        });
}
function downloadDissertation(){
    switch (document.getElementById("selectYear").value){
        case "firstYear":
            downloadFile('https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.edunao.com%2Fwp-content%2Fuploads%2F2022%2F07%2FMicrosoft-Azure.png&imgrefurl=https%3A%2F%2Fwww.edunao.com%2Fmoodle%2Fplugins%2Fazure%2F&tbnid=Cb8LGAcdhfiBQM&vet=12ahUKEwj6sonB3r39AhX5VaQEHSmlDrgQMygAegUIARDcAQ..i&docid=LfA0L4HCL2u2dM&w=3840&h=2171&q=azure&client=ubuntu&ved=2ahUKEwj6sonB3r39AhX5VaQEHSmlDrgQMygAegUIARDcAQ', 'test.png')
            break;
        case "secondYear":
            downloadFile('https://plainenglish.io/blog/how-to-download-a-file-using-javascript-fec4685c0a22', 'test')
            break;
        case "lastYear":
            downloadFile('https://plainenglish.io/blog/how-to-download-a-file-using-javascript-fec4685c0a22', 'test')
            break;
    }
}