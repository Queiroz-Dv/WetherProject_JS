document.querySelector('.busca').addEventListener('submit', async(event)=>
{
    //This will prevent the form to send the form
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    if(input !== '')
    {
        showWarning('Loading...');
        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid={dd7f29bfd78abf095913ff9ce1169827&units=metric&lang=pt_br}`;

        let results = await fetch(url);
        let json = await results.json();

        if (json.cod == 200) 
        {
            
        }
        else 
        {
            showWarning('Não encontramos esta localização');
        }
    }
});


function showWarning(msg)
    {
        document.querySelector('.aviso').innerHTML = msg;
    }