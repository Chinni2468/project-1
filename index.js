// PERSONAL PORTFOLIO – ONLY JAVASCRIPT
// Just create an empty file index.html and link this JS file
// <script src="portfolio.js"></script>

// ---------- DATA ----------
const portfolio = {
  name: "Geethika Reddy",
  role: "Web Developer | Student",
  about: "I am a passionate learner interested in web development and modern technologies.",
  skills: ["HTML", "CSS", "JavaScript", "Python", "React"],
  projects: [
    { title: "Portfolio Website", desc: "Personal portfolio using JavaScript." },
    { title: "Movie Recommendation System", desc: "ML project using Python." }
  ],
  email: "geethika@example.com"
};

// ---------- BASIC STYLES USING JS ----------
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f4f6f8";
document.body.style.color = "#333";

// ---------- HEADER ----------
const header = document.createElement("div");
header.style.background = "#1e293b";
header.style.color = "white";
header.style.padding = "20px";
header.style.textAlign = "center";

const nameEl = document.createElement("h1");
nameEl.textContent = portfolio.name;

const roleEl = document.createElement("p");
roleEl.textContent = portfolio.role;

header.append(nameEl, roleEl);
document.body.appendChild(header);

// ---------- SECTION FUNCTION ----------
function createSection(title, content) {
  const section = document.createElement("div");
  section.style.padding = "30px";
  section.style.maxWidth = "900px";
  section.style.margin = "auto";

  const h2 = document.createElement("h2");
  h2.textContent = title;
  h2.style.color = "#1e293b";

  section.appendChild(h2);
  section.appendChild(content);

  document.body.appendChild(section);
}

// ---------- ABOUT ----------
const aboutText = document.createElement("p");
aboutText.textContent = portfolio.about;
createSection("About Me", aboutText);

// ---------- SKILLS ----------
const skillsDiv = document.createElement("div");
portfolio.skills.forEach(skill => {
  const span = document.createElement("span");
  span.textContent = skill;
  span.style.display = "inline-block";
  span.style.background = "#e2e8f0";
  span.style.padding = "8px 15px";
  span.style.margin = "5px";
  span.style.borderRadius = "20px";
  skillsDiv.appendChild(span);
});
createSection("Skills", skillsDiv);

// ---------- PROJECTS ----------
const projectDiv = document.createElement("div");
portfolio.projects.forEach(p => {
  const card = document.createElement("div");
  card.style.background = "white";
  card.style.padding = "15px";
  card.style.marginBottom = "10px";
  card.style.borderRadius = "8px";
  card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

  const h3 = document.createElement("h3");
  h3.textContent = p.title;

  const desc = document.createElement("p");
  desc.textContent = p.desc;

  card.append(h3, desc);
  projectDiv.appendChild(card);
});
createSection("Projects", projectDiv);

// ---------- CONTACT ----------
const contactDiv = document.createElement("div");

const email = document.createElement("p");
email.textContent = `Email: ${portfolio.email}`;

const btn = document.createElement("button");
btn.textContent = "Say Hello";
btn.style.padding = "10px 20px";
btn.style.background = "#2563eb";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";

btn.onclick = () => alert("Hello! Thanks for visiting my portfolio 😊");

contactDiv.append(email, btn);
createSection("Contact", contactDiv);

// ---------- FOOTER ----------
const footer = document.createElement("div");
footer.textContent = "© 2025 My Portfolio";
footer.style.background = "#1e293b";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "15px";

document.body.appendChild(footer);
