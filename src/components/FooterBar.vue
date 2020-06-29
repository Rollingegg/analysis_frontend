<template>
    <div class="footer">
        <div class="copyright">
            Copyright
            <a-icon type="copyright"/>
            <span v-html="copyright"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBar',
    props: ['copyright']
}
</script>

<style scoped lang="less">
.footer {
    padding: 0 16px;
    margin: 24px 0;
    text-align: center;

    .copyright {
        color: rgba(0, 0, 0, .45);
        font-size: 14px;
        i {
            font-size: .8rem !important;
        }
    }

    &a {
        text-decoration: none;
    }
}
</style>
