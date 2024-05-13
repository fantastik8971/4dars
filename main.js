const userRandomNumber = alert("Sizda hozir Random sonlar chiqadi");
const randomNumber = Math.round(Math.random() * 50);
alert(`Random raqam: ${randomNumber}`);
const register = confirm(`Biz ${randomNumber} sonini 2 ga ko'paytirmoqchimiz va bo'lmoqchimiz`);




alert(`
Random orqali chiqqan son ${randomNumber} edi
Biz uni 2 ga ko'paytirib ${randomNumber * 2} soni chiqardik
Biz uni 2 ga bo'lib ${randomNumber / 2} soni chiqardik
va shu raqamni 3ga bo'lganda qoldig'ini chiqardik ${randomNumber % 3} soni chiqdi`);