package org.ifit.controller;


import org.ifit.entities.responsesgym.Apprentice;
import org.ifit.entities.responsesgym.Routine;
import org.ifit.entities.responsesgym.Status;
import org.ifit.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/I_FIT")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class LoginController {

    @Autowired
    private LoginService loginService;


    @PutMapping("/login")
    public void verifyLogin(@RequestBody Apprentice apprentice){
        loginService.ifUserExists(apprentice);

    }

    @PutMapping("/register")
    public void registerUser(@RequestBody Apprentice apprentice){
        Routine routine = new Routine();
        routine.setStatus(Status.StatusEnum.NEW);
        apprentice.setRoutine(routine);
        loginService.registerUser(apprentice);
    }
}
