<template>
    <div class="wrapper">
        <div class="slogan">
            <h1>Manage Your Tasks<span>task management empowers efficient organization, prioritization, and tracking to achieve goals with ease</span></h1>
            <NuxtLink to="/tasks">Get Started</NuxtLink>
        </div>
    </div>
</template>

<script>
  useHead({
    title: 'Task Management'
  })
</script>

<style scoped lang="scss">

    .wrapper {
        height: 100vh;
    }
    .slogan {
        text-align: center;
        position: relative;
        top: 45%;
        transform: translateY(-50%);

        h1 {
            color: $textDark;
            font-size: 48px;
            line-height: 100px;
            margin-bottom: 20px;
            span {
                display: block;
                font-size: 18px;
                font-weight: 500;
                line-height: 30px;
            }
        }

        a {
            display: block;
            background-color: $mainTheme;
            color: $textDark;
            max-width: 250px;
            width: 100%;
            font-size: 18px;
            font-weight: 500;
            margin: 0 auto;
            padding: 10px 0;
            border-radius: 5px;
            transition: background-color 0.2s ease;

            &:hover {
                background-color: #d4b345;
            }
        }
    }
</style>