"use strict";

const socialPosts = {
    templateUrl: "app/socialPosts/socialPosts.html",
    controller: [ function() {
        const vm = this;
        vm.postLibrary = [
            {title: "My day", thought: "Awesome"},
            {title: "My day", thought: "Greeat"},
            {title: "My day", thought: "delicious"},
        ]
        vm.formToggle = false;
        vm.addPost = function(newPost) {
           vm.postLibrary.push({...newPost});
            vm.formToggle = false;
            
        }
        vm.removePost = function(index) {
            vm.postLibrary.splice(index, 1);
        }
        vm.showForm = function() {
            vm.formToggle = true;
        }
    }]

}
angular
.module("SocialApp")
.component("socialPosts", socialPosts)