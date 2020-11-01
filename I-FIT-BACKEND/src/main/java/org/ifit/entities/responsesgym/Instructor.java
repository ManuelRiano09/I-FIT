package org.ifit.entities.responsesgym;

import lombok.Data;

@Data
public class Instructor {

    private String userName;
    private String password;
    private Journey.JourneyEnum journey;


}
