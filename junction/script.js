// JavaScript (script.js)

// User data object
let users = {
  data: [
    {
      userName: "Bob Marley",
      skills: ["Fullstack", "Mobile","Java", "Python"],
      price: "20",
      image: "white-tshirt.jpg",
    },
    {
      userName: "Kim Kardashian",
      skills: ["Fullstack", "Frontend", "DevOps"],
      price: "30",
      image: "white-tshirt.jpg",
    },
    {
      userName: "Selena Gomez",
      skills: ["Backend", "Mobile", "Java"],
      price: "35",
      image: "white-tshirt.jpg",
    },
    {
      userName: "Ali Alidin",
      skills: ["Backend", "Frontend", "DevOps", "Java"],
      price: "44",
      image: "white-tshirt.jpg",
    },
    {
      userName: "Begi Begimai",
      skills: ["Fullstack", "Mobile", "DevOps", "Python"],
      price: "21",
      image: "white-tshirt.jpg",
    },
    {
      userName: "Tina Carol",
      skills: ["Mobile", "Python"],
      price: "19",
      image: "white-tshirt.jpg",
    },
    {
      userName: "Ben Bill",
      skills: ["Backend", "Mobile", "Java", "Python"],
      price: "18",
      image: "white-tshirt.jpg",
    },
    {
      userName: "Steve Dylan",
      skills: ["Fullstack", "Mobile"],
      price: "29",
      image: "white-tshirt.jpg",
    },
  ],
};

// Function to generate user cards
function generateUserCards() {
  let usersContainer = document.getElementById("users");
  usersContainer.innerHTML = ""; // Clear existing user cards

  users.data.forEach((user) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.username = user.userName;

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", user.image);
    image.classList.add("user-image");

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    let name = document.createElement("h3");
    let nameLink = document.createElement("a");
    nameLink.textContent = user.userName;
    nameLink.href = "profile.html"; // Replace "user-profile.html" with the actual link URL
    nameLink.style.textDecoration = "none"; // Remove the underline
    name.appendChild(nameLink);
    userInfo.appendChild(name);

    let skills = document.createElement("p");
    skills.textContent = "Skills: " + user.skills.join(", ");
    userInfo.appendChild(skills);

    let price = document.createElement("p");
    price.textContent = "Age: " + user.price;
    userInfo.appendChild(price);

    card.appendChild(userInfo);

    usersContainer.appendChild(card);
  });
}

// Initial generation of user cards
generateUserCards();

// Function to filter users based on price
// Function to filter users based on price
function filterByPrice(checkbox) {
  let checkboxes = document.querySelectorAll("#price-filter input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    if (checkbox !== this) {
      checkbox.checked = false;
    }
  });

  if (!checkbox.checked) {
    checkbox.checked = true;
  }

  let selectedPrice = checkbox.value;

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    let userName = element.dataset.username;
    let user = users.data.find((user) => user.userName === userName);

    if (
      selectedPrice === "all" ||
      (selectedPrice === "15-20" && user.price >= 15 && user.price <= 20) ||
      (selectedPrice === "21-30" && user.price >= 21 && user.price <= 30) ||
      (selectedPrice === "31-40" && user.price >= 31 && user.price <= 40) ||
      (selectedPrice === "41-and-more" && user.price >= 41)
    ) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
}

// Function to filter users based on skill
function filterSkill(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value === "all") {
      element.classList.remove("hide");
    } else {
      let userName = element.dataset.username;
      let user = users.data.find((user) => user.userName === userName);
      if (user && user.skills.includes(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

// Function to search for users based on skills and names
function searchUsers() {
  let searchInput = document.getElementById("search-input").value.trim().toLowerCase();
  let searchSkills = searchInput.split(" ");

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    let userName = element.dataset.username;
    let user = users.data.find((user) => user.userName === userName);

    if (
      user &&
      (searchSkills.every((searchSkill) =>
        user.skills.some(
          (userSkill) =>
            userSkill.toLowerCase().includes(searchSkill) || userSkill.toLowerCase().includes(searchSkills.join(" "))
        )
      ) ||
        user.userName.toLowerCase().includes(searchInput))
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

