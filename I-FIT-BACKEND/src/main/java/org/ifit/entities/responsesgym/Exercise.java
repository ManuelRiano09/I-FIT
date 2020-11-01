package org.i_fit.entities.responsesgym;

import lombok.Data;


@Data
public class Exercise {

    private String name;
    private String description;
    private String machineName;
    private Integer repetition;
    private Integer series;

}
