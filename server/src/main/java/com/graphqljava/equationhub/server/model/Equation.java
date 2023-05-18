package com.graphqljava.equationhub.server.model;

import java.util.Arrays;
import java.util.List;

public class Equation {
    private String id;
    private String name;
    private String description;
    private String equation;
    private String variables;
    private String userId;

    public Equation( String id, String userId, String name, String description, String equation, String variables ){
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.description = description;
        this.equation = equation;
        this.variables = variables;
    }

    private static List<Equation> equations = Arrays.asList(
            new Equation("1", "1", "Pythagorean Theorem", "a^2 + b^2 = c^2", "a^2 + b^2 = c^2", "[a,b,c]"),
            new Equation("2", "1"," Quadratic Formula", "ax^2 + bx + c = 0", "x = (-b +- \\frac{\\sqrt{b^2 - 4a*c}}{2a})", "[x,a,b,c]"),
            new Equation("3", "1", "Slope", "y = mx + b", "m = \\frac{(y_2 - y_1)}{(x_2 - x_1)}", "[m,x_{1},x_{2},y_{1},y_{2}]")
    );

    public static Equation getById( String id ) {
        return equations.stream().filter( equation -> equation.getId().equals( id ) ).findFirst().orElse( null );
    }

    public static List<Equation> getIdsByUserId( String id ){
        return equations.stream().filter( equation -> equation.getUserId().equals( id ) ).toList();
    }

    public String getUserId() {
        return userId;
    }


    public String getId() {
        return id;
    }
}