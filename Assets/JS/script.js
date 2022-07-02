tailwind.config = {
    theme: {
      screens: {
          'sm': '480px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1440px',
          '2xl': '1920px', 
          '3xl': '2560px',
      }
    }
}


document.getElementById('btn').onclick = function() {
    document.getElementById('block').classList.toggle("hidden");
    document.getElementById('btn1').classList.toggle("hidden");
    document.getElementById('btn2').classList.toggle("hidden");
};

for(i=0;i<3;i++)
{
document.querySelectorAll('a')[i].onclick = function() {
    document.getElementById('block').classList.toggle("hidden");
    document.getElementById('btn1').classList.toggle("hidden");
    document.getElementById('btn2').classList.toggle("hidden");
};
}

document.getElementById('rab').onclick = function() {
    let pass = prompt('Введите пароль', 1111);
    if(pass=="1985")
    {
        window.location.href='Assets/Pages/docs.html';
    }
    else
    {
        alert("Не угадал пароль, лох)");
    }
};

