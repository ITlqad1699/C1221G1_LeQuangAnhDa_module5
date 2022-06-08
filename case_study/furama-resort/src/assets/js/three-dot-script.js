function createThreeDots() {
  document.querySelector('.table').onclick = ({
                                                target
                                              }) => {
    if (!target.classList.contains('more')) return;
    document.querySelectorAll('.dropout.active').forEach(
      (d) => d !== target.parentElement && d.classList.remove('active')
    );
    target.parentElement.classList.toggle('active');
  };
}
function deleteCustomer(id, name) {
  document.getElementById("idDelete").value = id;
  document.getElementById("nameDelete").innerText = " " + name + "?";
}
