//Adding sticky class on scroll 
const header = document.querySelector("header");
const shopping_cart = document.querySelector('.shopping-cart');
const cart_btns = document.querySelectorAll('.add-to-cart');



//Add Sticky class 
window.addEventListener ("scroll", () => {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

//For Hamburger menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};


//For Shopping Cart
for(cart_btn of cart_btns){
	cart_btn.onclick = (e)=>{
		let product_count = Number(shopping_cart.getAttribute('data-product-count')) || 0; //Retrieves the "data-product-count" attribute of the "shopping_cart" element and converts it from a string to a number. If the attribute is empty, it defaults to 
		shopping_cart.setAttribute('data-product-count',product_count + 1)
		//Increases the value of "product_count" by 1 and sets the updated value as the "data-product-count" attribute of the "shopping_cart" element.

		let title = e.target.parentElement.parentElement.querySelector('.product__title').innerText;//Selects the title of the product by traversing the parent elements of the clicked button (e.target) and locating the element with class "product__title".
		
		alert(`${title} added to cart Sucessfully`)//Displays an alert message containing the title of the product and a suitable message.
	}
}

//For scroll to top 
window.onscroll = function() {
	scrollFunction()
  };
  
  const scrollFunction =()=> {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  document.getElementById("scrollTopBtn").style.display = "block";
	} else {
	  document.getElementById("scrollTopBtn").style.display = "none";
	}
  }
  
  // When the user clicks on the button, scroll to the top of the document
  const topFunction=()=> {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
  }
  document.getElementById("scrollTopBtn").addEventListener("click", topFunction);