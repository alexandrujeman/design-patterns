// Standard module pattern
const UIControl = (function() {
  let text = "Hello world";

  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: function() {
      changeText();
    }
  };
})();

UIControl.callChangeText();

// Revealing module patter
const ItemControl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item added...");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  // Returning reveals private method 
  return {
    add: add,
    get: get
  };
})();

console.log('Reveal module pattern')
// Call revealed private module
ItemControl.add({ id: 1, name: "John" });
console.log(ItemControl.get(1));
