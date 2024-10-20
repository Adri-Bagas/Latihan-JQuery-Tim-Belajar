$(document).ready(function(){
  //soal 1
    $("button").click(function(){
      $(this).parent().remove();
    });


//soal 2
async function fetchData() {

  const res1 = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
  const res2 = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
  const data1 = await res1.json();
  const data2 = await res2.json();

  var card1 = document.getElementsByClassName('card')[0];
  var card2 = document.getElementsByClassName('card')[1];

  var img1 = card1.getElementsByTagName('img')
  var title1 =card1.getElementsByTagName('h2');
  var img2 = card2.getElementsByTagName('img')
  var title2 =card2.getElementsByTagName('h2');

  console.log(data1)
  $(img1).attr("src", data1.sprites.front_default)
  $(title1).text(data1.name)
  $(img2).attr("src", data2.sprites.front_default)
  $(title2).text(data2.name)

}

fetchData()


//soal3
document.getElementById("HomeNav").addEventListener("click",function(){
      $("header").html('<h1 id="header">Futuristic Cards</h1><p>Minimalistic design with a modern feel.</p>');
      $(".cards").html(`<div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cat_img.jpg/1200px-Cat_img.jpg" alt="Cat Image" />
            <div class="card-content">
                <h2>Cute Cat</h2>
                <p>
                    This is a cute cat, enjoying its life. Cats are known for their
                    independence and curiosity.
                </p>
            </div>

            <button class="close" type="button">
                Remove
            </button>
        </div>
        <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/900px-Cat03.jpg" alt="Cat Image" />
            <div class="card-content">
                <h2>Mysterious Cat</h2>
                <p>
                    With its piercing eyes, this cat seems to be plotting something in
                    the shadows.
                </p>
            </div>
            <button class="close" type="button">
                Remove
            </button>
        </div>`)
});

document.getElementById("AboutNav").addEventListener("click",function(){
        $(".cards").children().remove();
        $("#header").text("About");
        $("p").remove();
});

document.getElementById("ContactNav").addEventListener("click", function(){
        $(".cards").children().remove();
        $("#header").text("Contact");
        $("p").remove();
        $(".cards").html(`
          <div style="display: inline-flex;">
            <img style="width:300px" src ="https://i.pinimg.com/enabled_lo/564x/da/79/43/da79438ad0d713f7610cef123700d350.jpg">
            <div style="margin-left:20px">
              <p>Nama: Kenneth Heagent</p>
              <p>Email: 123@321.com</p>
              <p>Nomor Telepon: 87654321</p>
            </div>
          </div>
          `)
})

});
