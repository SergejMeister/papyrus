package de.civis.papyrus.resources;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Sergej Meister
 */
@RestController
@RequestMapping("/")
public class HomeResource {

    @RequestMapping
    String home() {
        return "Hello";
    }
}
