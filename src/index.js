// SEMUA KODE ADA DISINI
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = function () {
    $(document).ready(function () {

        console.log("test");

        async function fetchData() {

            const pokemonName = "pikachu"
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
            const data = await response.json();
            console.log(data)
            $(".card img").attr("src", data.sprites.front_default)
            $(".card-content h2").text(data.name)

        }

        fetchData()


        $("#HomeNav").click(function () {

            $("header").remove()
            $("section").remove()


            $("body").append(

                `
                <header>
                    <h1 id="header">Futuristic Cards</h1>
                    <p>Minimalistic design with a modern feel.</p>

                </header>

                <!-- Card Section -->
                <section class="cards">
                    <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cat_img.jpg/1200px-Cat_img.jpg"
                            alt="Cat Image" />
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/900px-Cat03.jpg"
                            alt="Cat Image" />
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
                    </div>
                </section>
                `
            )
            $("button").click(function () {
                $(this).parent().remove();
            });

            fetchData()
        })


        $("#AboutNav").click(function () {

            $("header").remove()
            $("section").remove()

            $("body").append(`
                <header>
                    <h1>About Page</h1> 
                    <p>placeholder text</p>
                </header>`)

        })

        $("#ContactNav").click(function () {

            $("header").remove()
            $("section").remove()

            $("body").append(

                `
                <section class="cards">
                    <div class="card" style="width: 18rem; border: 1px solid #ccc; padding: 20px; border-radius: 8px;">
                        <img src="./style/Screenshot 2024-03-28 081535.png">
                        <div class="card-content">
                            <h5 class="card-title">M Affan Fahrozi</h5>
                            <p>Email: m.affanfahrozi@gmail.com</p>
                            <p>No telp: 081291447296</p>
                        </div>
                    </div>
                </div>
                `
            )
        })

        $("button").click(function () {
            $(this).parent().remove();
        });
    });
}