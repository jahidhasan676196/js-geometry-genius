function triangleArea() {
    const triangleBase =document.getElementById('input-base')
    const trianglebaseValue = triangleBase.value;
    const base = parseFloat(trianglebaseValue)
    console.log(base);

    const triangleHeight= document.getElementById('input-height')
    const triangleheightValue=triangleHeight.value;
    const height =parseFloat(triangleheightValue);
    console.log(height);

    const area =0.5*base*height;
    console.log('triangle area is :', area);

    const areaspan = document.getElementById('area-field')
    areaspan.innerText=area;

}