document.addEventListener("DOMContentLoaded", function () {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com';
    const apiUrl = 'https://www.fruityvice.com/api/fruit';
    const button = document.getElementById("button");
    const input = document.getElementById("fruitIdInput");
    const result = document.getElementById("result");
    const clearButton = document.getElementById("clearButton");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const id = input.value;

        fetch(`${proxyUrl}/${apiUrl}/${id}`)
            .then((response) => response.json())
            .then((json) => {

                result.innerHTML = `<div id="result" style="width: auto;">
                <div class="card-body">
                  <h3 class="card-title">${json.name}</h3>
                  <p class="card-text">
                  <li>Family: ${json.family}</li>
                  <li>Order: ${json.order}</li>
                  <li>Calories: ${json.nutritions.calories}</li>
                  <li>Fat: ${json.nutritions.fat}</li>
                  <li>Sugar: ${json.nutritions.sugar}</li>
                  <li>Carbohydrates: ${json.nutritions.carbohydrates}</li>
                  <li>Protein: ${json.nutritions.protein}</li></p>
                  <a class="button-link" href="https://www.fruityvice.com/">Source</a>
                </div>
              </div>
            `;
                showfruit(json);
            })
            .catch((err) => showError(err));

    });

    /*function showError(message) {
        result.innerHTML = `<p class="error">Please type a fruit name only</p>`;
    }*/

    clearButton.addEventListener("click", () => {
        input.value = "";
        result.innerHTML = "";
    });
});