package com.example.zsgc.entity;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "figuretorole")
public class Figure2Role {
    private int ftrId;
    private int figureId;
    private int roleId;

    @Override
    public String toString() {
        return "Figure2Role{" +
                "ftrId=" + ftrId +
                ", figureId=" + figureId +
                ", roleId=" + roleId +
                '}';
    }

    public int getFtrId() {
        return ftrId;
    }

    public void setFtrId(int ftrId) {
        this.ftrId = ftrId;
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
}
