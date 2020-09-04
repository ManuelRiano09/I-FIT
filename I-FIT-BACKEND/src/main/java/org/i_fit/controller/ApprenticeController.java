package org.i_fit.controller;

import org.i_fit.entities.responsesgym.Apprentice;
import org.i_fit.services.ApprenticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/I_FIT")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class ApprenticeController {

    @Autowired
    private ApprenticeService apprenticeService;


    @GetMapping("/apprentice")
    public Optional<Apprentice> getApprenticeData(Integer id){
        return apprenticeService.getApprentice(id);
    }
}
