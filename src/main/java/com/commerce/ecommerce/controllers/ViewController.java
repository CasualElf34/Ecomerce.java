package com.commerce.ecommerce.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/add-product")
    public String showAddProductForm() {
        return "add-product";
    }
}