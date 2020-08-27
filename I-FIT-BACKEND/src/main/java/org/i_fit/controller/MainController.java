package org.i_fit.controller;

import org.i_fit.entities.Apprentice;
import org.i_fit.services.ApprenticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/I_FIT")
public class MainController {

    @Autowired
    private ApprenticeService apprenticeService;

    @GetMapping("/apprenticedata")
    public List<Apprentice> getInfoForInstructor(){
        return apprenticeService.getInfoForInstructor();
    }

}
