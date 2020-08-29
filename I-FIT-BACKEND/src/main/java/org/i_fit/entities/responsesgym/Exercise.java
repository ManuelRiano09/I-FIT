package org.i_fit.entities.responsesgym;

import lombok.Data;

@Data
public class Exercise {

    private String name;
    private String description;
    private org.i_fit.entities.responsesgym.Machine Machine;
    private Integer repetition;
    private Integer series;

}
