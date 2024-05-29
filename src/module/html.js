const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");

class HTML {
  fileContent = `<!DOCTYPE html> <html lang="en">
  <head> <title>Your Page Title</title> <link rel="stylesheet" href="styles.css"> </head>
  <body>
    <header> <h1>Your Website</h1> <p>Welcome to your website!</p> </header>
    <nav> <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li> </ul> </nav>
    <main>  <section id="home"> <h2>Home</h2> <p>This is the home section of your website.</p> </section>
            <section id="about"> <h2>About Us</h2> <p>Learn more about our company and values.</p> </section>
            <section id="services"> <h2>Our Services</h2> <p>Discover the services we offer to our clients.</p> </section> </main>
    <footer> <p>&copy; 2024 Your Website. All rights reserved.</p> </footer> </body></html>`;
  create(name) {
    const fileName = `${name}`;
    const folderName = "../../../src";
    const trimmed = name.split(".")[0];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);

      if (!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath, { recursive: true });
      else new Logger().log("Folder already present.");

      fs.writeFile(filePath, this.fileContent, (err) => {
        err
          ? new Logger().error("Error creating file:", err)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      new Logger().error(error);
      return error;
    }
  }
}

module.exports = HTML;
