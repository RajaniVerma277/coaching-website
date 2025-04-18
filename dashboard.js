function toggleDemo(id) {
    const list = document.getElementById(id);
    list.classList.toggle("hidden");
  }
  function buyCourse(courseName, amount, redirectTo) {
    const options = {
      key: "rzp_test_YourKeyHere", // Use your Razorpay Test Key
      amount: amount * 100,
      currency: "INR",
      name: "Coaching Center",
      description: courseName + " Purchase",
      handler: function (response) {
        alert("Payment Successful! ID: " + response.razorpay_payment_id);
        window.location.href = redirectTo;
      },
      theme: {
        color: "#1976d2"
      }
    };
    const rzp = new Razorpay(options);
    rzp.open();
  }