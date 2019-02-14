"use strict";

const postForm = {
    bindings: {
        showForm: "&",
        formToggle: "<",
        addPost: "&"

    },
    templateUrl: "app/postForm/postForm.html"
}

angular
.module("SocialApp")
.component("postForm", postForm);