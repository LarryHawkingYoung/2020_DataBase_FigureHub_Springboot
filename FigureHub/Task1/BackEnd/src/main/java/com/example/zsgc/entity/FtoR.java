package com.example.zsgc.entity;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "ftor")
public class FtoR {
    private int ftrId;
    private String figureName;
    private String roleName;
    private int figureId;
    private int roleId;

    @Override
    public String toString() {
        return "FtoR{" +
                "ftrId=" + ftrId +
                ", figureName='" + figureName + '\'' +
                ", roleName='" + roleName + '\'' +
                ", figureId=" + figureId +
                ", roleId=" + roleId +
                '}';
    }

    public int getFigureId() {
        return figureId;
    }

    public void setFigureId(int figureId) {
        this.figureId = figureId;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public int getFtrId() {
        return ftrId;
    }

    public void setFtrId(int ftrId) {
        this.ftrId = ftrId;
    }

    public String getFigureName() {
        return figureName;
    }

    public void setFigureName(String figureName) {
        this.figureName = figureName;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
