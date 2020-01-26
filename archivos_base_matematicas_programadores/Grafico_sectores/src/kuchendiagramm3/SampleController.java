/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package kuchendiagramm3;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.chart.PieChart;

/**
 *
 * @author ralph
 */
public class SampleController implements Initializable {

    @FXML
    private PieChart piechart;

    @FXML
    private void handleButton1Action(ActionEvent event) {
        ObservableList<PieChart.Data> pieChartData =
                FXCollections.observableArrayList(
                new PieChart.Data("Chuck Norris", 13),
                new PieChart.Data("Fred Feuerstein", 25),
                new PieChart.Data("Arthur Dent", 10),
                new PieChart.Data("Old Shatterhand", 22),
                new PieChart.Data("Der Wixxer", 30),
                new PieChart.Data("Elwood Blues", 37));
        piechart.setData(pieChartData);

        piechart.setTitle("Die Wahlergebnisse" + ": Vorsitzender");
        piechart.setData(pieChartData);
    }

    @FXML
    private void handleButton2Action(ActionEvent event) {
        ObservableList<PieChart.Data> pieChartData =
                FXCollections.observableArrayList(
                new PieChart.Data("Bruce Willis", 4),
                new PieChart.Data("Will Smith", 25),
                new PieChart.Data("Arnold Schwarzvomacker", 37));
        piechart.setData(pieChartData);

        piechart.setTitle("Die Wahlergebnisse" + ": Stellvertreter");
        piechart.setData(pieChartData);
    }

    @FXML
    private void handleButtonClearAction(ActionEvent event) {
        ObservableList<PieChart.Data> pieChartData =
                FXCollections.observableArrayList();
        piechart.setTitle("Die Wahlergebnisse");
        piechart.setData(pieChartData);
    }

    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
    }
}
