function attachEventsListeners() {
    const convertor_To_One_Meter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };
    let [input, btn, result] = document.querySelectorAll('input')
    let [from, to] = document.querySelectorAll('select')
    btn.addEventListener('click', e => {
        result.value = convertor_To_One_Meter[from.value] * Number(input.value) /
            convertor_To_One_Meter[to.value]
    })
}