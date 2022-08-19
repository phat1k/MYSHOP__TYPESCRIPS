export function currency(num: number){
    return new Intl.NumberFormat('vn').format(num) + 'vnd'
}