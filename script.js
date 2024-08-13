function display(event) {
  event.preventDefault();
  if (true) {
    let a = document.getElementById("f-name").value;
    let b = document.getElementById("s-name").value;
    let c = document.getElementById("email").value;
    let d = document.getElementById("number").value;
    let e = document.getElementById("address").value;
    let f = document.getElementById("city").value;
    let g = document.getElementById("country").value;
    let h = document.getElementById("gender").value;
    let i =document.querySelector('input[name="prefferd"]:checked').value;
    let j = document.getElementById("date").value;
    let k = document.getElementById("elligible").value;
    let l = document.getElementById("age").value;
    if (
      a == "" ||
      b == "" ||
      c == "" ||
      d == "" ||
      e == "" ||
      f == "" ||
      g == "" ||
      h == "" ||
      i == "" ||
      j == "" ||
      k == "" ||
      l == ""
    ) {
      alert("all feilds are mandatory");
    } else if (!isNaN(a) || !isNaN(b)) {
      alert("Name should be alphabatic");
    } else if (d.length < 11 || d.length > 11) {
      alert("phone No is not valid");
    } else if (l >20) {
      alert("you are not eligible for this contest");
    } else {
      let formData = `
      <h2>Form Data:</h2>
      <p>First Name: ${a}</p>
      <p>Second Name: ${b}</p>
      <p>Email: ${c}</p>
      <p>Number: ${d}</p>
      <p>Address: ${e}</p>
      <p>City: ${f}</p>
      <p>Country: ${g}</p>
      <p>Gender: ${h}</p>
      <p>Preferred: ${i}</p>
      <p>Date: ${j}</p>
      <p>Eligible: ${k}</p>
      <p>Age: ${l}</p>
    `;

      document.getElementById("display-data").innerHTML = formData;
      alert("The Form is submitted")
    }
  }
}
