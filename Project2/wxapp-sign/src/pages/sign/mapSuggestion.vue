<template>
</template>
<script>
const chooseLocation = requirePlugin('chooseLocation');

export default {
    onShow(){
        const location = chooseLocation.getLocation(); 
        console.log(location);
    }
}
</script>