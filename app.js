const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Jej przygoda ze sztuką rozpoczęła się w 2006r. od malutkich grafik. Rok później rozpoczęła naukę rysunku i malarstwa w Ognisku Plastycznym przy Towarzystwie Przyjaciół Sztuk Pięknych w Lublinie. W 2010r. ukończyła 3-letni kurs pod kierunkiem mgr Waldemara Arbaczewskiego. Obecnie doskonali swój warsztat malarski na zajęciach u mgr Macieja Bijasa. Swoje prace prezentowała na wystawach poplenerowych w: Nałęczowie, Józefowie, Łosiach, Sosnowicy i na kilku wystawach zbiorowych w Galerii TPSP w Lublinie. W okresie 2010-2013 miała wystawy indywidualne: w Galerii „Przy Bramie”, w Galerii „Krańcowa”, w Łęcznej, w Radawczyku i w Krasnymstawie.";
const liefeStartingContent = "Hanna Gralak urodziła się we Wrocławiu. Z zawodu jest nauczycielem. Od 2007 roku należy do Towarzystwa Przyjaciół Sztuk Pięknych w Lublinie. Ukończyła trzyletnie Ognisko Plastyczne przy TPSP, pod kierunkiem nauczycieli: Waldemara Arbaczewskiego i Macieja Bijasa. Od 2016 roku należy do Związku Polskich Artystów Plastyków. Swoje prace prezentowała na wystawach zbiorowych w TPSP w Lublinie, poplenerowych w Nałęczowie, Józefowie, Łosicach i Sosnowicy, a także na wystawach indywidualnych w Lublinie, Łęcznej, Radawczyku i Krasnymstawie."
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Hanna Gralak, wagarowicz50@gmail.com";
const galleryContent = "Obraz malowany ręcznie. Akryl na płótnie, 50 cm x 60 cm NUMER PRODUKTU: OHG/027/2012";
const app = express();

let posts = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (request, response) {
    response.render("home");
  });

  app.listen(3000, function () {
    console.log("Server started on port 3000");
  });