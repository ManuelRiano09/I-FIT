package org.i_fit.entities.responsesgym;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "machine")
public class Machine {

    @Id
    private String name;
    private String description;
}
