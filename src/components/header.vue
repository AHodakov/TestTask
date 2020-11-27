<template>
  <header>
    <section class="header_section1">
      <div>
        <input
          class="search__input"
          type="search"
          placeholder="Поиск по системе"
        />
        <button class="search__btn">Search</button>
      </div>
      <figure>
        <img
          src="https://yt3.ggpht.com/a/AGF-l7-2fNXiswcerGp15nxVfX70CAUy-T0KJyZL2g=s288-c-k-c0xffffffff-no-rj-mo"
          alt=""
          width="80px"
          height="80px"
        />
        <figcaption>
          <p>Alexander C.</p>
          <address>Администратор</address>
        </figcaption>
      </figure>
    </section>
    <section class="header_section2">
      <p>home</p>
    </section>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  padding: 0 50px;
}
.search__input {
  width: 500px;
  height: 30px;
  border-radius: 5px;
}
.search__btn {
  height: 30px;
  margin-left: 2px;
  border-radius: 5px;
}

.content {
  text-align: left;
  padding: 0 50px;
}

.header_section1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_section2 {
  display: flex;
  justify-content: left;
}
figure img {
  border-radius: 50%;
}

figure figcaption {
  float: right;
  padding: 5px;
}

figure p {
  margin: 10px 0 5px 0;
  font-size: 1.5rem;
}
figure address {
  margin: 5px;
  font-size: 0.8rem;
  text-align: left;
}
</style>