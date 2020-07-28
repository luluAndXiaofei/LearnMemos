var template = `<div>
    <p>姓名： {{name}}</p>
    <p>年龄： {{age}}</p>
</div>`;

// var comp = {
export default {
    // data() {
    //     return {
    //         name: "张三",
    //         age: 18,
    //     };
    // },
    props: ["name", "age"],
    template,
}