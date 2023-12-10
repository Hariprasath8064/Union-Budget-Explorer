<template>
  <div class="main-body">
    <section class="header-section">
      <h1>Non Tax Revenue 2023-24</h1>
      <p>
        Welcome to the comprehensive overview of the Union Government's non-tax revenues for the fiscal year 2023-24.
        This section highlights key sources, including returns on assets, interest, fees, fines, and more. The data is sourced from the Receipts Budget of 2023-24.
      </p>
    </section>

    <section class="content-section">
      <h2>Non Tax Revenue Distribution</h2>
      <h6>Figures are in ₹ Crores</h6>

      <div class="image-container">
        <img src="../../../images/Screenshot 2023-11-03 110413.png" alt="Non Tax Revenue Distribution">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // Your component options go here
}
</script>

<style>
.main-body {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header-section {
  text-align: center;
  max-width: 800px;
}

.header-section h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.header-section p {
  font-size: 1.2em;
  color: #555;
}

.content-section {
  margin-top: 30px;
}

.content-section h2 {
  text-align: left;
  font-size: 2em;
}

.content-section h6 {
  text-align: right;
  font-size: 0.8em;
  color: #888;
  margin-top: -15px;
}

.image-container {
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}
</style>
